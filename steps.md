
## Config

- init nextJs project
- init shadcn
- add dark theme
- change global style in the globals.css
- auth UI(luciedReact icons + emojiDb emojes)
- Add github/google auth(config them from the supabase auth providers list + their own pages) 
- create table on the database
- Make the trigger that invokes when a user authenticate(Did with SQL succeed, did with UI failed)

There is a discussion about it , It is a known bug . 

[Github issue]("https://github.com/supabase/supabase/issues/563")


1.Create a public.users table:
````
create table profiles (
  id uuid references auth.users not null primary key,
  email text,
  ....,
  ...
);
````

2. create a trigger:

````
create or replace function public.handle_new_user() 
returns trigger as $$

BEGIN
  INSERT INTO public.profiles(id,email,display_name,image_url) 
  VALUES(
    new.id,
    new.raw_user_meta_data ->> 'email',
COALESCE(new.raw_user_meta_data ->> 'user_name’,new.raw_user_meta_data ->> 'name')
    new.raw_user_meta_data ->> 'avatar_url'
  );
  RETURN new;
END
$$ language plpgsql security definer;

````

3.Trigger the function on invite:

````
-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
````


- Import the react query for fetching 
- set the typescript type
- 





 