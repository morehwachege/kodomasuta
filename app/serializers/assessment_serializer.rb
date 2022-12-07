class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :description, :technical_mentor_id, :questions
end
