class Api::CheckinsController < ApplicationController

  def new
    @checkin = Checkin.new
  end

  def show
    @checkin = Checkin.find_by(id: params[:id])
  end

  def create
    @checkin = Checkin.new(checkin_params)
    if @checkin.save
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def index
    @checkins = Checkin.all.includes(:user)
  end

  def edit
    @checkin = Checkin.find_by(id: params[:id])
  end

  def update
    @checkin = Checkin.find_by(id: params[:id])
    if @checkin.update_attributes(checkin_params)
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def destroy
    @checkin = Checkin.find_by(id: params[:id])
    @checkin.destroy
    render :show
  end


  private

  def checkin_params
    params.require(:checkin).permit(:review, :location, :rating,
                                    :image_url, :beer_id, :user_id)
  end
end
