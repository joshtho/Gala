class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :artists
  has_many :artworks
  has_many :notes
  def artists 
    self.object.artists.uniq
  end
end
