class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :choice1
      t.string :choice2
      t.string :choice3
      t.string :correct_answer
      t.integer :assessment_id

      t.timestamps
    end
  end
end
