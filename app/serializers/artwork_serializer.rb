class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :medium, :location, :artist
  has_one :user
  has_one :artist
  
  def artist 
    {id: self.object.artist.id, name: self.object.artist.name}
  end
end
