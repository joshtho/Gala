class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
