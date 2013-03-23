class TheatersController < ApplicationController
  def index
    render json: Theater.all
  end

  def show
    render json: Theater.find(params[:id])
  end
end
