window.onload = () ->
    setInterval(()->
        carousel()
        return
    5000)

carousel = () ->
    slider = document.getElementById("slider")
    slides = slider.getElementsByTagName("img")
    for slide in slides
        if slide.className == "active"
            slide.className = ""
        else
    return
