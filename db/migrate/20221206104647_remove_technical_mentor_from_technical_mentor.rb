class RemoveTechnicalMentorFromTechnicalMentor < ActiveRecord::Migration[6.1]
  def change
    remove_column :technical_mentors, :TechnicalMentor, :string
  end
end
