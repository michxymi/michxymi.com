import Avatar from "@/components/avatar"

export default function About() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow card rounded-box place-items-center m-8"><Avatar/></div> 
        <div className="divider lg:divider-horizontal"/> 
        <div className="grid flex-grow card rounded-box place-items-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  )
}
