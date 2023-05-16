class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :artworks
  has_many :artists
end
