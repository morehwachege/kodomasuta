class UserSerializer < ActiveModel::Serializer
  attributes :email, :password_digest
end
