class NotesController < ApplicationController

    def create
        note = Note.create!(note_params)
        render json: note, status: :created
    end

    def update 
        note = Note.find(params[:id])
        note.update!(artwork_params)
        render json: artwork, status: :accepted
    end

    # def destroy
    #     note = Note.find_by(id: params[:id])
    #     note.destroy
    #     head :no_content
    # end
    
    private
        
    def note_params
        params.permit(:artwork_id, :body)
    end

end
