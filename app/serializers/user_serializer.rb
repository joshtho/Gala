class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :artists
  has_many :artworks
  def artists 
    self.object.artists.uniq
  end
end
