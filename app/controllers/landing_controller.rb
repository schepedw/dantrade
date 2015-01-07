require 'curb'
require 'json'

class LandingController < ApplicationController
  def compare
    market_api = 'dev.markitondemand.com/Api/v2/Quote/json'
    respond_to do |format|
      format.html
      format.json {render :json =>JSON.parse(Curl::Easy.perform(market_api + "?symbol=#{params[:ticker]}").body)}
    end
  end
end
