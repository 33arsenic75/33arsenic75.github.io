"use strict";
if (localStorage.getItem("dark-mode") === "true" || !("dark-mode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  localStorage.setItem("dark-mode", "true");
  document.querySelector("html")?.classList.add("dark");
} else {
  localStorage.setItem("dark-mode", "false");
  document.querySelector("html")?.classList.remove("dark");
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2UuYXN0cm8iXSwic291cmNlc0NvbnRlbnQiOlsiLS0tXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXIuYXN0cm8nO1xuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyLmFzdHJvJztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJ0AvdXRpbHMvQXBwQ29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG5cdGhlYWQ6IHtcblx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdH07XG59XG5cbmNvbnN0IHtcblx0aGVhZDogeyB0aXRsZSwgZGVzY3JpcHRpb24gfVxufSA9IEFzdHJvLnByb3BzIGFzIFByb3BzO1xuLS0tXG5cbjxodG1sIGxhbmc9XCJlblwiIGNsYXNzPVwiZGFya1wiPlxuXHQ8aGVhZD5cblx0XHQ8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuXHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cblx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG5cdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG5cdFx0PG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9e0FwcENvbmZpZy5hdXRob3J9IC8+XG5cblx0XHQ8bGluayByZWw9XCJzaXRlbWFwXCIgaHJlZj1cIi9zaXRlbWFwLWluZGV4LnhtbFwiIC8+XG5cdFx0PGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiBocmVmPVwiL3Jzcy54bWxcIiAvPlxuXHRcdDxsaW5rXG5cdFx0XHRyZWw9XCJpY29uXCJcblx0XHRcdGhyZWY9XCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0lMjJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiB2aWV3Qm94PSUyMjAgMCAxMDAgMTAwJTIyPjx0ZXh0IHk9JTIyLjllbSUyMiBmb250LXNpemU9JTIyOTAlMjI+8J+boO+4jzwvdGV4dD48L3N2Zz5cIlxuXHRcdC8+XG5cblx0XHQ8c2NyaXB0PlxuXHRcdFx0aWYgKFxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFyay1tb2RlJykgPT09ICd0cnVlJyB8fFxuXHRcdFx0XHQoISgnZGFyay1tb2RlJyBpbiBsb2NhbFN0b3JhZ2UpICYmXG5cdFx0XHRcdFx0d2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrLW1vZGUnLCAndHJ1ZScpO1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk/LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrLW1vZGUnLCAnZmFsc2UnKTtcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG5cdFx0XHR9XG5cdFx0PC9zY3JpcHQ+XG5cdDwvaGVhZD5cblx0PGJvZHlcblx0XHRjbGFzcz1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGJnLXN0b25lLTEwMCBmb250LW1vbm8gdGV4dC1ncmF5LTk1MCBkYXJrOmJnLXN0b25lLTkwMCBkYXJrOnRleHQtd2hpdGVcIlxuXHQ+XG5cdFx0PE5hdmJhciAvPlxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cblx0XHRcdDxzbG90IC8+XG5cdFx0PC9kaXY+XG5cblx0XHQ8Rm9vdGVyIC8+XG5cdDwvYm9keT5cbjwvaHRtbD5cbjxzdHlsZSBpczpnbG9iYWw+XG5cdDpyb290IHtcblx0fVxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7QUFpQ0csSUFDQyxhQUFhLFFBQVEsV0FBVyxNQUFNLFVBQ3JDLEVBQUUsZUFBZSxpQkFDakIsT0FBTyxXQUFXLDhCQUE4QixFQUFFLFNBQ2xEO0FBQ0QsZUFBYSxRQUFRLGFBQWEsTUFBTTtBQUN4QyxXQUFTLGNBQWMsTUFBTSxHQUFHLFVBQVUsSUFBSSxNQUFNO0FBQ3JELE9BQU87QUFDTixlQUFhLFFBQVEsYUFBYSxPQUFPO0FBQ3pDLFdBQVMsY0FBYyxNQUFNLEdBQUcsVUFBVSxPQUFPLE1BQU07QUFDeEQ7IiwibmFtZXMiOltdfQ==