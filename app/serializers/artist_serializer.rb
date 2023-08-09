class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :users
  has_many :users
  def users
    users = self.object.users.map {|user| user.username}
    users
  end
end
