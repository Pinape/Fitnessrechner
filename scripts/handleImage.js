  function handleImage(activity, gender) {
    const image = "assets/" + activity.options[activity.selectedIndex].value + "_" + gender + ".png"
    document.getElementById("person").src = image;
  }

