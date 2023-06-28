class User < ApplicationRecord
    has_many :artworks
    has_many :artists, through: :artworks
    has_many :notes, through: :artworks
    has_secure_password
end
