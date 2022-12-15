# Vue3 Supabase Auth

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Installation of dependencies: (Supabase v1)
Supabase is an open source Firebase alternative providing all the backend features you need to build a product.

```sh
npm install @supabase/supabase-js@1
```


## Trigger replicate users on profiles
In the Supabase SQL Editor run `User Management Starter` to create a new database 
After running `User Management Starter`, run the following new query
```shell
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, username)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## Create database Todos in Supabase
In the Supabase SQL Editor run `Todo List` to create a new database

## Install Tailwind CSS

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
