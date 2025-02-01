export function getRouteForLoggedInUser(role: string) {
  switch (role) {
    case "private":
      return "/";
    case "public":
      return "/company";
    default:
      return "/";
  }
}
