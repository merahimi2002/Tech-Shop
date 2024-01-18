const DomainUrl = "Tech-Shop";

export function Url(RelativeUrl: string) {
  if (RelativeUrl[0] !== "/") {
    RelativeUrl = "/" + RelativeUrl;
  }
  DomainUrl + RelativeUrl;
  return DomainUrl + RelativeUrl;
}

export function UrlPicWithTwoFolderBack(RelativeUrl: string) {
  const UrlVar = "../../";
  return UrlVar + DomainUrl + "/" + RelativeUrl;
}

export function UrlATag(RelativeUrl: string) {
  return RelativeUrl;
}
