import React from 'react'

function Navbar() {
  return (
    <div>
    
    
   <div class="container mb-5">
        {/* <h2 class="py-3 text-center">Bootstrap Navbar Class</h2> */}
        <div class="row py-3">
            <div class="col">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <a href="" class="navbar-brand">Sajvik</a>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="" class="nav-link">About Us</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Gallery</a></li>


                        {/* <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">
                        Gallery
                        </a>
                        <div class="dropdown-menu">
                     <a href="" class="dropdown-item">Link One</a>
                     <a href="" class="dropdown-item">Link Two</a>
                     <a href="" class="dropdown-item">Link Three</a>

                        </div>
                        </li>
                         */}
                        <li class="nav-item"><a href="" class="nav-link">Blog</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Navbar