class NoteSerializer < ActiveModel::Serializer
  attributes :id, :body, :artwork
  has_one :artwork

  def artwork
    {id: self.object.artwork.id, title: self.object.artwork.title}
  end
end
