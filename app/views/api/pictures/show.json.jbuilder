@pictures.each do |picture|
    json.set! picture.id do 
        json.extract! picture, :id, :title, :description, :user_id
    end
end