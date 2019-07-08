$("#addrow").on("click", () => {
  $(".tbody").append(
    `<tr> <th scope="row"></th> <td> <input type="text" class="form-control" id="exampleInputEmail1" name="quantity" /> </td> <td> <input type="text" class="form-control" id="exampleInputEmail1" name="item" required /> </td> </tr>`
  );
});
