class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :category_id, :description, :technical_mentor_id, :questions
end
