class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image
end
