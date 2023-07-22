class Artist < ApplicationRecord
    has_many :artworks, dependent: :destroy
    has_many :users, through: :artworks

    validates :name, presence: true
    validates :description, presence: true
    validates :image, presence: true
end
