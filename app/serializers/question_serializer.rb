class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :choice1, :choice2, :choice3, :correct_answer, :assessment_id
end
