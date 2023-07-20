class Artwork < ApplicationRecord
  belongs_to :user
  belongs_to :artist
  has_many :notes, dependent: :destroy

  validates :title, presence: true
  validates :medium, presence: true
  validates :image, presence: true
  validates :location, presence: true
end
