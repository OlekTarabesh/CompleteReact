import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

import { categories } from "./directory-db";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
