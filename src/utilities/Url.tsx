// "/Tech-Shop/"
const DomainUrl = import.meta.env.BASE_URL;

export function Url(RelativeUrl: string) {
  if (RelativeUrl[0] === "/") {
    RelativeUrl =  RelativeUrl.substring(1);
  }
  return DomainUrl + RelativeUrl;
}

export function UrlPicWithTwoFolderBack(RelativeUrl: string) {
  const UrlVar = "../..";
  return UrlVar + DomainUrl + RelativeUrl;
}

export function UrlATag(RelativeUrl: string) {
  return RelativeUrl;
}
