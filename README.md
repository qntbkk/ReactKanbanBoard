# MxReactWidget
## Boilterplate to build Mendix Widget by React

## How to use
1. Install dependencies
npm install
2. Run 
`gulp `

Then start to edit. If you want to create your own widget, change all occurances of "MxReactWidget" in to "Your_widget_name".

3. If there is a change, gulp will compile files and copy results to release/
4. There is a test/ folder, where you can test your widget in a mendix project.
5. Zip files in release in to a mpk package

You can run: `gulp zip` to pack all files in ./release/**/* into ./test/widgets/


TODO:
use webpack to build tsx
fix css bundle
add launch and task