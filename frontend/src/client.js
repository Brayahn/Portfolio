import sanityClient, { SanityClient } from "@sanity/client";
import imageUrlBuider from "@sanity/image-url";

export const client = SanityClient({
  projectId: "wfcp6qfv",
  dataset: "production",
  apiVersion: "2023-04-12",
  useCdn: true,
  token:
    "skAbYHfcfaxd2B3jBjHQ5ClNuPKCQhwBfH68NqmhM8ggNXXHvce2m180EkW5XJoEfE5KIwtPprPXoFhy1eC10d6Dx5uLpEewUiyV9fqvPWj0UyzrDLLtlnxz0ndSlG4GqqrCXw2Ae0BlBnG1eE72iopCmqs93iSJU0msbkuQDcKHG0LKKwB8",
});
