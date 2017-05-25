class Api::BeersController < ApplicationController

  def new
    @beer = Beer.new
  end

  def show
    @beer = Beer.find_by(id: params[:id])
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def index
    if params.include?(:search) && params[:search] != ""
      @beers = Beer.includes(:checkins).search_by_name(params[:search])
    else
      @beers = Beer.includes(:checkins).order(:name)
    end
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
    render :show
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :description, :brewery,
                                 :abv, :ibu, :image_url, :style)
  end

end
