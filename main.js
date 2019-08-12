/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

function area_point (selection) {
    let childNode = selection.items[0]
    let localBounds = childNode.localBounds

    console.log(childNode )

    if (childNode) {
        childNode.areaBox = childNode.areaBox === null ? {width: localBounds.width, height: localBounds.height} : null
    } else {

    }

}


module.exports = {
    commands: {
        area_point,
    }
};
