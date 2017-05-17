class Api::BeersController < ApplicationController

  def new
    @beer = Beer.new
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @beers = Beer.all
  end

  def edit
    @beer = Beer.find_by(id: params[:id])
  end

  def update
    @beer = Beer.find_by(id: params[:id])
    if @beer.update_attributes(beer_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @beer = Beer.find_by(id: params[:id])
    @beer.destroy
    render :index
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :description, :brewery,
                                 :abv, :ibu, :image_url, :style)
  end

end
