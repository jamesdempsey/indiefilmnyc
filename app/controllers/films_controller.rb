class FilmsController < ApplicationController
  def index
    render json: Film.all
  end

  def show
    render json: Film.find(params[:id])
  end
end
