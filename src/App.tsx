import Tree from '@/components/tree/Tree.tsx';
import { TreeProvider } from '@/context/TreeProvider.tsx';
import Toast from '@/components/ui-toolkit/toastContainer/Toast.tsx';

function App() {
  return (
    <div>
      <TreeProvider>
        <Toast />
        <Tree />
      </TreeProvider>
    </div>
  );
}

export default App;
