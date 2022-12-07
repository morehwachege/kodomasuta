class StudentSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email
end
