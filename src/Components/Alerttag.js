import React from "react";

export default function Alerttag(props){
  return(
  
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {props.alert.type} : {props.alert.msg}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

  
  )
}