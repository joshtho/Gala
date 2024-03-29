class NotesController < ApplicationController

    def index 
        render json: Note.all
    end

    def create
        note = Note.create!(note_params)
        render json: note, status: :created
    end

    def update 
        note = Note.find(params[:id])
        note.update!(note_params)
        render json: note, status: :accepted
    end
    
    private
        
    def note_params
        params.permit(:body, :artwork_id)
    end

end
