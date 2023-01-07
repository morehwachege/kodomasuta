class StudentSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :assessments_and_details
end
