module Scrapers
  def scrape_ifc_doc(film_url)
    unless Film.find_by_url(film_url)
      ifc = Theater.find_by_url('http://www.ifccenter.com/')

      film_doc = Nokogiri::HTML(open(film_url))

      film_title = film_doc.css('.post h1').first.content

      p_nodes = film_doc.css('.post p').select do |p_node|
        p_node.content.split.size > 40
      end

      film_desc = p_nodes.first.content

      film = Film.create!(title: film_title, description: film_desc,
                          url: film_url)

      li_nodes = film_doc.css('ul.showTimesListing li')
      showtimes_nodes = li_nodes.select do |showtime_node|
        showtime_node.content[' at:']
      end

      showtimes_nodes.each do |showtime_node|
        showing_date = showtime_node.css('strong').first.content
        showing_date.slice!(' at:')

        a_nodes = showtime_node.css('a')
        showing_time_nodes = a_nodes.select do |showing_time_node|
          showing_time_node.content.present?
        end

        showing_time_nodes.each do |showing_time_node|
          showtime = [showing_date, showing_time_node.content, 'EDT'].join(' ')
          film_showtime = DateTime.parse(showtime)

          Showing.create!(film_id: film.id, theater_id: ifc.id,
                          showtime: film_showtime)
        end
      end
    end
  end

  def scrape_ifc_coming_soon(ifc_coming_soon_url)
    ifc_coming_soon = Nokogiri::HTML(open(ifc_coming_soon_url))
    film_nodes = ifc_coming_soon.css('.wide_listing_right')

    film_nodes.each do |film_node|
      film_url = film_node.css('h3 a').first.attributes['href'].value

      scrape_ifc_doc(film_url)
    end

    a_nodes = ifc_coming_soon.css('.coming_soon_pagination.pagination-bottom a')

    next_node = a_nodes.select { |a| a.content['Next'] }

    if next_node.present?
      next_url = 'http://www.ifccenter.com' + next_node.first.attributes['href'].value
      scrape_ifc_coming_soon(next_url)
    end
  end
end
