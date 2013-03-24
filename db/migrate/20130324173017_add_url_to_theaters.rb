class AddUrlToTheaters < ActiveRecord::Migration
  def change
    add_column :theaters, :url, :string
  end
end
