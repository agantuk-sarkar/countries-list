// appending the navBar in navBar-container
document.querySelector(".navBar-container").innerHTML = navBar();

// function which will return the navBar in all pages necessary
export function navBar() {
  return `<nav class="navBar-content border-2 border-red-500 h-[4rem] w-full bg-white">
            <div class="nav-logo border-2 border-green-500 h-full w-[5rem]">
                <img class="h-full w-full" src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"/>
            </div>
        </nav>`;
}
