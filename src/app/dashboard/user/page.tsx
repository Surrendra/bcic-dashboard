import Box from "../components/box";
import { TextInput } from "../components/input";

export default function userPage() {
    return (
      <div>
        <Box title="Create New User">
          <TextInput/>
        </Box>
      </div>
    );
}