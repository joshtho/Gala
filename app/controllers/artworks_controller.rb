class ArtworksController < ApplicationController
    # def index
    #     render json: Artwork.all 
    # end

    def show 
        artwork = Artwork.find(params[:id])
        render json: artwork, status: :ok
    end

    def create
        artwork = @current_user.artworks.create!(artwork_params)
        render json: artwork, status: :created
    end

    def update
        artwork = @current_user.artworks.find(params[:id])
        artwork.update!(artwork_params)
        render json: artwork, status: :accepted
    end

    def destroy
        artwork = Artwork.find(params[:id])
        artwork.destroy
        head :no_content
    end

    private 

    def artwork_params
        params.permit(:title, :medium, :image, :location, :artist_id)
    end
end
