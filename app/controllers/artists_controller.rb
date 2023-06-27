class ArtistsController < ApplicationController
    def index
        render json: Artist.all 
    end

    def show 
        artists = Artist.find(params[:id])
        render json: artists, status: :ok
    end

    def create
        artist = Artist.create!(artist_params)
        render json: artist, status: :created
    end

    def update
        artist = Artist.find(params[:id])
        artist.update!(artist_params)
        render json: artist, status: :ok
    end

    def destroy
        artist = Artist.find(params[:id])
        artist.destroy
        head :no_content
    end

    private 

    def artist_params
        params.permit(:name, :description, :image)
    end
end
