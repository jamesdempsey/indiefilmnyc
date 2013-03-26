namespace :db do
  namespace :scrape do
    desc 'Scrape IFC Center'
    task ifc: :environment do
      require 'nokogiri'
      require 'open-uri'
      require "#{Rails.root}/lib/scrapers"
      include Scrapers

      ifc_coming_soon_url = 'http://www.ifccenter.com/coming-soon/?viewmode=all'

      scrape_ifc_coming_soon(ifc_coming_soon_url)
    end
  end
end
