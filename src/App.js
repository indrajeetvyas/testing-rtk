import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RepoList from './RepoList';
import { store } from './store';
import { Provider } from 'react-redux';
import Layout from './Layout';
import UserDetails from './components/user-details';
import NoPage from './components/NoPage';
import SearchBox from './components/SearchBox';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />}></Route>
          <Route path='search-user' element={<SearchBox search="user" />}></Route>
          <Route path='search-repo' element={<SearchBox search="repo" />}></Route>
          <Route path='repo-list' element={<RepoList />}></Route>
          <Route path='user-details' element={<UserDetails />}></Route>
          <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
