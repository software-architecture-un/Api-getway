-- Lists
mutation{
  createList(list: {
    name: "2 list"
    id_user: 1
    comment: "No"
    estimatedDate: "2019-01-01"
    order: 1
  }){
    content {
      id
      name
      comment
      estimatedDate
      order
    }
  }
}

mutation{
  createPlace(place: {
    id_list: 1
    placeLon: 3.58888
    placeLat: -99.999999
  }){
    content {
      id
      id_list
      placeLon
      placeLat

    }
  }
}

